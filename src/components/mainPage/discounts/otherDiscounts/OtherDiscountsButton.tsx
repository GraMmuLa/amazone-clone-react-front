import React from "react";

const OtherDiscountsButton: React.FunctionComponent<{buttonText: string, isActive: boolean}> = ({buttonText, isActive}) => {
    return (
        <button type="button" className="discounts__button button-link">{buttonText}</button>
    );
}