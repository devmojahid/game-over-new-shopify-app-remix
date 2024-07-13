import CompletedComponent from "../components/CompletedComponent";
import DraftComponent from "../components/DraftComponent";
import OnGoningComponent from "../components/OnGoningComponent";
import TestComponent from "../components/Test";

export const tabs = [
    {
        id: 'all customers',
        content: 'All',
        panelID: 'all-customers-content-one',
        component: <TestComponent />,
    },
    {
        id: 'on gonna',
        content: 'On Gonna',
        panelID: 'on-gonna-content-one',
        component: <OnGoningComponent />,
    },
    {
        id: 'draft',
        content: 'Draft',
        panelID: 'draft-content-one',
        component: <DraftComponent />,
    },
    {
        id: 'completed',
        content: 'Completed',
        panelID: 'completed-content-one',
        component: <CompletedComponent />,
    },

];