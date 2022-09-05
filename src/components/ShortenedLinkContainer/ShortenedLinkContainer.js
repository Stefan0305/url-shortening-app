function ShortenedLinkContainer(props) {

    return (
        <div className="link-wrapper">
            <div>
                <p className="full-link">{props.value.original_link}</p>
                <p className="short-link" id="short-link">
                    {props.value.short_link}
                </p>
            </div>
            <button
                className="button"
                id="copy-link-button"

            >
                Copy
            </button>
        </div>
    );
}
export default ShortenedLinkContainer;