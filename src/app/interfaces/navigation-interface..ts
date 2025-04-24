export interface NavigationLink {
    /** Die Route, auf die geklickt wird (z. B. "/" oder "/privacy") */
    route: string;
    /** Die Fragment-ID (ohne #), z. B. "aboutMe" */
    id: string;
    text: {
        DE: string;
        EN: string;
    };
}
