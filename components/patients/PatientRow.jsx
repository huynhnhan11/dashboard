export default function PatientRow({ data, isSelected, onClick }) {
    return (
        <tr onClick={onClick} className={`text-center hover:bg-gray-50 border-t border-gray-300 ${isSelected ? "bg-gray-100" : ""}`}>
            <td className="border border-gray-300">
                <span className="text-xl">{isSelected ? "▼" : "▶"}</span>
            </td>
            <td className="text-blue-700 font-semibold border border-gray-300">{data.id}</td>
            <td className="border border-gray-300">{data.name}</td>
            <td className="border border-gray-300">{data.gender}</td>
            <td className="border border-gray-300">{data.age}</td>
            <td className="border border-gray-300">{data.phone}</td>
            <td className="border border-gray-300">{data.address}</td>
            <td className="border border-gray-300">{data.created_at}</td>
            <td className="space-x-2 border border-gray-300">
                <button title="Khám">👨‍⚕️</button>
                <button title="Sửa">✏️</button>
                <button title="Xoá">🗑️</button>
            </td>
        </tr>
    );
}
