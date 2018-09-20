import React from 'react';


export default (props) => {
    const {started, completed} = props.task;
    let buttonProps = {
        type : "button",
        className : "task-button"
    };
    if (!started) {
        buttonProps["className"] += " start-button";
        buttonProps["onClick"] = props.handlers.startTask;
        buttonProps["value"] = "Start";
    } else if (!completed) {
        buttonProps["className"] += " complete-button";
        buttonProps["onClick"] = props.handlers.completeTask;
        buttonProps["value"] = "Complete";
    } else {
        buttonProps["className"] += " complete-button";
        buttonProps["disabled"] = true;
        buttonProps["value"] = "Completed";
    }
    return (
        <input {...buttonProps} />
    );
}