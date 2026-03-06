export interface Version {
    tag: string;
    label: string;
    basePath: string;
    default?: boolean;
}

export const VERSIONS: Version[] = [
    {
        tag: "current",
        label: "Current",
        basePath: "",
        default: true,
    },
    {
        tag: "legacy",
        label: "Legacy",
        basePath: "/legacy",
    }
]