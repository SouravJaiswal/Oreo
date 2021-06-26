import React, { ChangeEvent, useState, useRef } from "react";
import { File } from "./File";
import { Radio } from "./Radio";
import { Text } from "./Text";
import { InputProps } from "./Input.types";
import { Search } from "./Search";
import { Textarea } from "./Textarea";

export const Input = (props: InputProps) => {
    switch (props.type) {
        case "file":
            return <File {...props} />;
        case "search":
            return <Search {...props} />;
        case "textarea":
            return <Textarea {...props} />;
        case "checkbox":
        case "radio":
            return <Radio {...props} />;
        default:
            return <Text {...props} />;
    }
};
