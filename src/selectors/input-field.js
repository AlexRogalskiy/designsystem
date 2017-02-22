import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

class Input extends Component {
  render() {
    const {
      onFocus,
      onChange,
      onKeyDown,
      value,
      id,
      placeholder,
      isSuggestionsShowing,
      ariaInvalid,
      resetLabel,
      onBlur,
      onReset,
      inputFieldRef,
      highlightedId,
      suggestionListId
    } = this.props;
    return (
      <div
        role='combobox'
        aria-expanded={ isSuggestionsShowing }
        onFocus={ onFocus }
        onBlur={ onBlur }
        aria-activedescendant={highlightedId > -1 ? `suggestion-option-${highlightedId}` : null}
        aria-owns={suggestionListId}
      >
        <input
          onChange={ (e) => {onChange(e.target.value);}}
          className='ffe-input-field input-field'
          onKeyDown={ onKeyDown }
          autoComplete='off'
          value={ value }
          id={ id }
          placeholder={ placeholder }
          ref={inputFieldRef}
          aria-invalid={ ariaInvalid } // add aria with hoc?
          aria-autocomplete='list'
        />
        { value.length > 0 &&
        <button
          aria-label={ resetLabel }
          className='reset-button'
          onMouseDown={ onReset }
          tabIndex={-1}
          type="button"
        >
          <KryssIkon className='reset-button-icon'/>
        </button>
        }
        <div className={classNames('arrow-icon', {'arrow-icon--up': isSuggestionsShowing })}>
          <ChevronIkon focusable={ false }/>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  isSuggestionsShowing: PropTypes.bool.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  ariaInvalid: PropTypes.bool,
  inputFieldRef: PropTypes.func,
  highlightedId: PropTypes.number,
  suggestionListId: PropTypes.string,
};

Input.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  inputFieldRef: () => {},
};

export default Input;
