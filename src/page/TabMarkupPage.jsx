import "../css/tabMarkup/App.css"
import {useState} from "react";

const tabData = [
    {
        id: 0,
        title: "ITEM 1",
        content: "Authorize the user data ✅",
    },
    {
        id: 1,
        title: "ITEM 2",
        content: "Redirect user to cart page 🛒",
    },
    {
        id: 2,
        title: "ITEM 3",
        content: "Create new payment for the user 💰",
    },
];

function TabMarkupPage() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="tab">
            <div className="tab__header">
                {tabData.map((item, index) => (
                    <button onClick={() => setActiveTab(item.id)} key={index} className={item.id === activeTab ? "active" : ""}>
                        <span>{item.title}</span>
                        <span className={item.id === activeTab  ? "tab-indicator" : ""}></span>
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabData[activeTab].content}
            </div>
        </div>
    )
}

export default TabMarkupPage;