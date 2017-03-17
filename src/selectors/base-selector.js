import React, {PropTypes, Component} from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import {KeyCodes} from '../util/types';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.showHideSuggestions = this.showHideSuggestions.bind(this);
    this.onSuggestionClick = this.onSuggestionClick.bind(this);
    this.onInputResetClick = this.onInputResetClick.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.filterSuggestions = this.filterSuggestions.bind(this);

    this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: 'suggestion-list'
    };

    /*
     Used for controlling the calling of props.onFocus and props.onBlur.
     This is necessary for maintaining focus in the input field for mouseClick events
     on the clearInput button and suggestion items.
     */
    this.shouldPreventBlurForNextMouseClick = false;
  }

  preventBlurForNextMouseClick(prevent = true) {
    this.shouldPreventBlurForNextMouseClick = prevent;
  }

  setFocus() {
    this.input.focus();
  }

  getSuggestionListHeight() {
    if (this.suggestionList) {
      return this.suggestionList.scrollbars.getClientHeight();
    }
    return 0;
  }

  getInputHeight() {
    if (this.input) {
      return this.input.getBoundingClientRect().height;
    }
    return 0;
  }

  filterSuggestions() {
    const {suggestions, suggestionFilter, value} = this.props;
    return suggestions.filter(suggestionFilter(value));
  }

  onInputChange(value) {
    this.setState({showSuggestions : true, highlightedSuggestionIndex : -1}, () => {
      this.props.onChange(value);
      window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
    });
  }

  onFocus() {
    if (this.shouldPreventBlurForNextMouseClick) {
      this.preventBlurForNextMouseClick(false);
      return;
    }
    this.showHideSuggestions(true, this.props.onFocus);
    window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
  }

  onBlur() {
    if (this.shouldPreventBlurForNextMouseClick) {
      this.input.focus();
      window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
      return;
    }

    if (this.props.shouldHideSuggestionOnBlur) {
      this.showHideSuggestions(false, () => {
        window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
        this.props.onBlur();
      });
      return;
    }
    window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
    this.props.onBlur();
  }

  onSuggestionSelect(suggestion) {
    if (suggestion) {
      const {shouldHideSuggestionsOnSelect, onSelect} = this.props;
      if (shouldHideSuggestionsOnSelect) {
        this.showHideSuggestions(false, () => onSelect(suggestion));
        return;
      }
      onSelect(suggestion);
    }
  }

  onSuggestionClick(suggestion) {
    this.preventBlurForNextMouseClick();
    this.onSuggestionSelect(suggestion);
  }

  onInputResetClick() {
    this.preventBlurForNextMouseClick();
    this.onInputReset();
  }

  onInputReset() {
    this.showHideSuggestions(false, this.props.onReset);
    window.setTimeout(() => {this.props.onSuggestionListChange(this.getSuggestionListHeight());});
  }

  showHideSuggestions(show, cb = () => {}) {
    const nextState = show ? {showSuggestions: show} : {showSuggestions: false, highlightedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  setNextHighlighted() {
    const {highlightedSuggestionIndex} = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === suggestions.length - 1 ? 0 : highlightedSuggestionIndex + 1;
    this.setState({highlightedSuggestionIndex: nextHighlightedSuggestionIndex});

    if (nextHighlightedSuggestionIndex === 0) {
      this.suggestionList.setScrollPosStart();
      return;
    }
    this.suggestionList.setScrollPosNext();
  }

  setPreviousHighlighted() {
    const {highlightedSuggestionIndex} = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === 0 ? suggestions.length - 1 : highlightedSuggestionIndex - 1;
    this.setState({highlightedSuggestionIndex: nextHighlightedSuggestionIndex});

    if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
      this.suggestionList.setScrollPosEnd();
      return;
    }
    this.suggestionList.setScrollPosPrevious();
  }

  setFirstHighlighted() {
    this.setState({highlightedSuggestionIndex: 0});
    this.suggestionList.setScrollPosStart();
  }

  setLastHighlighted() {
    this.setState({highlightedSuggestionIndex: this.filterSuggestions().length - 1});
    this.suggestionList.setScrollPosEnd();
  }

  onInputKeyDown(event) {
    const {showSuggestions, highlightedSuggestionIndex} = this.state;
    const {shouldSelectHighlightedOnTab, onTab} = this.props;
    const {which, altKey} = event;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showHideSuggestions(true);
          break;
        }
        if (showSuggestions) {
          this.setNextHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showHideSuggestions(false);
          break;
        }
        if (showSuggestions) {
          this.setPreviousHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.ESC:
        this.onInputReset();
        break;
      case KeyCodes.HOME:
        if (showSuggestions) {
          this.setFirstHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.END:
        if (showSuggestions) {
          this.setLastHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        if (showSuggestions) {
          event.preventDefault();
        }
        this.onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
        break;
      case KeyCodes.TAB:
        if (showSuggestions && shouldSelectHighlightedOnTab) {
          this.onSuggestionSelect(this.filterSuggestions()[highlightedSuggestionIndex]);
        }
        onTab(event);
    }
  }

  render() {
    const {
      value,
      placeholder,
      suggestionsHeightMax,
      ariaInvalid,
    } = this.props;
    const {showSuggestions, highlightedSuggestionIndex, suggestionListId} = this.state;
    return (
      <div
        className='base-selector ffe-input-group'
      >
        <Input
          inputFieldRef={(input) => {
            this.input = input;
          }}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputResetClick}
          onKeyDown={this.onInputKeyDown}
          isSuggestionsShowing={showSuggestions}
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          highlightedIndex={highlightedSuggestionIndex}
          suggestionListId={suggestionListId}
          ariaInvalid={ariaInvalid}
        />
        {showSuggestions &&
        <SuggestionsList
          {...this.props}
          ref={(suggestionList) => {
            this.suggestionList = suggestionList;
          }}
          highlightedIndex={highlightedSuggestionIndex}
          suggestions={this.filterSuggestions()}
          heightMax={suggestionsHeightMax}
          onSelect={this.onSuggestionClick}
          id={suggestionListId}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestionFilter: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  shouldHideSuggestionsOnSelect: PropTypes.bool.isRequired,
  shouldSelectHighlightedOnTab: PropTypes.bool.isRequired,
  shouldHideSuggestionOnBlur: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder : PropTypes.string,
  ariaInvalid : PropTypes.bool,
  suggestionsHeightMax : PropTypes.number,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onReset: () => {},
  ariaInvalid: false,
  placeholder : '',
};

export default BaseSelector;
