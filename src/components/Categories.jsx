const Categories = ({ icon, category }) => {
    return (
        <div className="flex items-center flex-col gap-4 p-8 rounded-md bg-base-200">
            <div className="text-4xl text-Teal">
                {icon}
            </div>
            <div>{category}</div>
            <a href="" className="text-sm text-gray">View more</a>
        </div>
    )
}
export default Categories