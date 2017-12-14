import React  from 'react';
import {
    array,
    bool,
    func,
    string as stringType
} from 'prop-types';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.onFilesSelected = this.onFilesSelected.bind(this);
        this.onFileDeleted = this.onFileDeleted.bind(this);
        this.setFileInputElement = this.setFileInputElement.bind(this);
        this.triggerUploadFileNativeHandler = this.triggerUploadFileNativeHandler.bind(this);
    }

    setFileInputElement(element) {
        this.fileInputElement = element;
    }

    triggerUploadFileNativeHandler() {
        // clear file input to trigger onChange when uploading same filename
        if (this.fileInputElement) {
            this.fileInputElement.value = '';
        }
        this.fileInputElement.click();
    }

    onFilesSelected(event) {
        this.props.onFilesSelected(event.target.files);

    }

    onFileDeleted(event) {
        this.props.onFileDeleted(
            this.props.selectedFiles
                .find(file => file.name === event.target.id));
    }

    render() {
        const {
            id,
            label,
            selectedFilesHeaderLabel,
            selectedFiles,
            accept,
            multiple,
            errorMessage,
            infoMessage,
            successMessage
        } = this.props;

        return (
            <div className="ffe-file-upload">
                <button
                    className="ffe-file-upload__button"
                    aria-invalid={ String(!!errorMessage) }
                    onClick={ this.triggerUploadFileNativeHandler }
                >
                    <span className="ffe-file-upload__button__label-icon" />
                    <span id={`${id}-label`}>{ label }</span>
                </button>
                <input
                    id={ id }
                    type="file"
                    accept={ accept }
                    multiple={ multiple }
                    ref={ this.setFileInputElement }
                    onChange={ this.onFilesSelected }
                    aria-labelledby={ `${id}-label` }
                />

                { !errorMessage && successMessage && <div className="ffe-field-success-message">{ successMessage }</div> }
                { errorMessage && !Array.isArray(errorMessage) && <div className="ffe-field-error-message">{ errorMessage }</div> }
                { errorMessage && Array.isArray(errorMessage) && errorMessage.map((message, index) =>
                    <div key={ index } className="ffe-field-error-message">{ message }</div>
                )}
                { infoMessage && <div className="ffe-field-info-message">{ infoMessage }</div> }

                { selectedFiles && selectedFiles.length > 0 &&
                <div>
                    <div className="ffe-file-upload__filename__title">{ selectedFilesHeaderLabel }</div>
                    <ul className="ffe-file-upload__selected-files">
                        { selectedFiles.map((file, index) => (
                            <li key={ index }>
                                <div className="ffe-file-upload__filename">{ file.name }</div>
                                <div className="ffe-file-upload__file-size">
                                    { `${Math.round(file.size / 1024)}kB` }
                                </div>
                                <button
                                    id={ file.name }
                                    className="ffe-file-upload__delete-button"
                                    onClick={ this.onFileDeleted }
                                />
                            </li>
                        )) }
                    </ul>
                </div>
                }
            </div>
        );
    }
}

FileUpload.propTypes = {
    /** ID for the input field. The ID is used as a base for the label ID as well. */
    id: stringType.isRequired,
    /**
     * Label for the button to trigger native upload handling. The label doubles as the label
     * for the input field via aria-labelledby.
     */
    label: stringType.isRequired,
    selectedFiles: array.isRequired,
    /**
     * Will be called with `FileList`-object containing the `File`-objects the user selected.
     * See MDN for documentation on
     * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and
     * [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
     */
    onFilesSelected: func.isRequired,
    onFileDeleted: func.isRequired,
    multiple: bool,
    /**
     * Sets the `accept` attribute of the input field. Use to limit allowed file types.
     * Takes a comma-separated list of file extensions or MIME types. See
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)
     * for more information.
     */
    accept: stringType,
    selectedFilesHeaderLabel: stringType,
    errorMessage: stringType,
    infoMessage: stringType,
    successMessage: stringType
};

export default FileUpload;
