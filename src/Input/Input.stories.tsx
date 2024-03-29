import React, { useState } from "react";
import { Input } from "../Input";
import { onChangeParams } from "./Input.types";

export default {
    title: "Input",
};

export const Text = () => {
    let [username, setUsername] = useState();

    return (
        <Input
            autoFocus={true}
            type="text"
            value={username}
            onChange={({ value, isValid }: onChangeParams) =>
                typeof value === "string" ? setUsername(value) : ""
            }
            disabled
            name="username"
            label="username"
            placeholder="Username"
            rules={[{ type: "required", errMsg: "Username is required" }]}
            icon={
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.4141 11.9312C13.1194 11.2331 12.6916 10.5989 12.1547 10.0641C11.6195 9.52767 10.9854 9.10001 10.2875 8.80469C10.2813 8.80156 10.275 8.8 10.2688 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1407 1.78125 8.00004 1.78125C5.85941 1.78125 4.12504 3.51562 4.12504 5.65625C4.12504 6.94844 4.75785 8.09375 5.73129 8.79844C5.72504 8.80156 5.71879 8.80312 5.71254 8.80625C5.01254 9.10156 4.38441 9.525 3.84535 10.0656C3.30896 10.6009 2.8813 11.235 2.58598 11.9328C2.29585 12.616 2.13939 13.3485 2.12504 14.0906C2.12462 14.1073 2.12755 14.1239 2.13364 14.1394C2.13974 14.1549 2.14888 14.1691 2.16053 14.181C2.17218 14.193 2.1861 14.2025 2.20147 14.2089C2.21684 14.2154 2.23336 14.2188 2.25004 14.2188H3.18754C3.25629 14.2188 3.31098 14.1641 3.31254 14.0969C3.34379 12.8906 3.82816 11.7609 4.68441 10.9047C5.57035 10.0188 6.74691 9.53125 8.00004 9.53125C9.25316 9.53125 10.4297 10.0188 11.3157 10.9047C12.1719 11.7609 12.6563 12.8906 12.6875 14.0969C12.6891 14.1656 12.7438 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7986 14.2089C13.814 14.2025 13.8279 14.193 13.8396 14.181C13.8512 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8755 14.1073 13.875 14.0906C13.8594 13.3438 13.7047 12.6172 13.4141 11.9312ZM8.00004 8.34375C7.28285 8.34375 6.60785 8.06406 6.10004 7.55625C5.59223 7.04844 5.31254 6.37344 5.31254 5.65625C5.31254 4.93906 5.59223 4.26406 6.10004 3.75625C6.60785 3.24844 7.28285 2.96875 8.00004 2.96875C8.71723 2.96875 9.39223 3.24844 9.90004 3.75625C10.4079 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4079 7.04844 9.90004 7.55625C9.39223 8.06406 8.71723 8.34375 8.00004 8.34375Z"
                        fill="#545454"
                    />
                </svg>
            }
        />
    );
};

export const Textarea = () => {
    let [description, setDescription] = useState("");

    return (
        <Input
            autoFocus={true}
            type="textarea"
            value={description}
            onChange={({ value, isValid }: onChangeParams) =>
                typeof value === "string" ? setDescription(value) : ""
            }
            disabled={false}
            name="Description"
            label=""
            placeholder="Description"
            rules={[{ type: "required", errMsg: "Description is required" }]}
        />
    );
};

export const Email = () => {
    let [email, setEmail] = useState("");

    return (
        <Input
            type="text"
            value={email}
            onChange={({ value }: onChangeParams) =>
                typeof value === "string" ? setEmail(value) : ""
            }
            name="email"
            label="email"
            placeholder="Email"
            rules={[{ type: "required", errMsg: "Email is required" }]}
        />
    );
};

export const Password = () => {
    let [password, setPassword] = useState("");

    return (
        <Input
            type="password"
            value={password}
            onChange={({ value }: onChangeParams) =>
                typeof value === "string" ? setPassword(value) : ""
            }
            name="Password"
            label="Password"
            placeholder="Password"
            rules={[
                { type: "required", errMsg: "Password is required" },
                {
                    type: "regex",
                    errMsg: "Username does not match the required items",
                    limiter:
                        "/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/",
                },
            ]}
        />
    );
};

export const ConfirmPassword = () => {
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <Input
                type="password"
                value={password}
                onChange={({ value }: onChangeParams) =>
                    typeof value === "string" ? setPassword(value) : ""
                }
                name="Password"
                label="Password"
                placeholder="Password"
                rules={[
                    { type: "required", errMsg: "Password is required" },
                    {
                        type: "regex",
                        errMsg: "Username does not match the required items",
                        limiter:
                            "/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/",
                    },
                ]}
            />
            <Input
                type="password"
                value={confirmPassword}
                onChange={({ value }: onChangeParams) =>
                    typeof value === "string" ? setConfirmPassword(value) : ""
                }
                name="Confirm Password"
                label="Confirm Password"
                placeholder="Confirm Password"
                disabled
                rules={[
                    { type: "required", errMsg: "Password is required" },
                    {
                        type: "match",
                        matchValue: password,
                        errMsg: "Password mismatch",
                    },
                    {
                        type: "regex",
                        errMsg: "Username does not match the required items",
                        limiter:
                            "/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/",
                    },
                ]}
            />
        </>
    );
};

export const Search = () => {
    let [search, setSearch] = useState("");

    return (
        <Input
            type="search"
            value={search}
            onChange={({ value }: onChangeParams) =>
                typeof value === "string" ? setSearch(value) : ""
            }
            name="Search"
            label="Search"
            placeholder="eg. How am I looking today?"
        />
    );
};

export const Radio = () => {
    let [radio, setRadio] = useState("male");

    return (
        <Input
            className="helloworld"
            type="radio"
            value={radio}
            onChange={({ value }) => setRadio(value)}
            name="radio"
            full={true}
            disabled={true}
            options={[
                {
                    label: <p>Hello world</p>,
                    value: "male",
                },
                {
                    label: "Female",
                    value: "female",
                },
            ]}
        />
    );
};

export const Checkbox = () => {
    let [radio, setRadio] = useState("");

    return (
        <Input
            className="helloworld"
            type="checkbox"
            value={[radio]}
            label="Declaration"
            onChange={({ value }) => {
                setRadio(value);
            }}
            name="radio"
            options={[
                {
                    label:
                        "I have read all the instructions carefully and have understood them.I agree not to cheat or use unfair means in the examination. Iunderstand using unfair means of any sort will lead to my immediatedisqualification. The decision of Exam Lounge will be final in thesematters and cannot be appealed.",

                    value: "male",
                },
            ]}
        />
    );
};

export const File = () => {
    let [image, setImage] = useState<onChangeParams>({
        value: "",
        isValid: false,
    });

    return (
        <Input
            type="file"
            value={typeof image.value === "string" ? image.value : ""}
            onChange={(value: onChangeParams) => {
                setImage(value);
            }}
            name="radio"
            accept="image/*"
            rules={[
                {
                    type: "maxSize",
                    errMsg: "File size should be less than 1mb",
                    maxSize: 1024,
                },
            ]}
        />
    );
};
