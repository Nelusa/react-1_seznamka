import {HeartIcon, XMarkIcon} from "@heroicons/react/24/outline/index.js";

const buttons = [
  {className: "dislike", icon: XMarkIcon},
  {className: "like", icon: HeartIcon},
]

const ActionButtons = () => {
  return (
      <div className="action-buttons">
        {buttons.map(button => (
            <button className={`action-button ${button.className}`} key={button.className}>
              <button.icon className="icon"/>
            </button>
        ))}
      </div>
  )
}

export default ActionButtons