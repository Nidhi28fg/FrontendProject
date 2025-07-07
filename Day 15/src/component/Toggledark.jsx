export default function Toggledark() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center bg-white dark:bg-black text-black dark:text-white">DArkmode Button toggle</h1>
            <button className="bg-black text-white p-2 rounded-md" onClick={() => {
                document.body.classList.toggle("dark")
            }} >Dark Mode</button>
        </div>
    )
}

//set darkMode: "class", in tailwind.config.js to use dark mode
