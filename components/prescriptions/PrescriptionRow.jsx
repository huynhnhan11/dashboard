export default function PrescriptionRow({ data, index, isSelected, onClick }) {
    return (
        <tr
            className={`text-center hover:bg-gray-100 cursor-pointer ${isSelected ? "bg-gray-200" : ""
                }`}
        >
            <td className="border px-2 py-1">
                <span className="text-xl">{isSelected ? "▼" : "▶"}</span>
            </td>
            <td className="border px-2 py-1 text-blue-600 font-medium hover:underline">
                {data.code}
            </td>
            <td className="border px-2 py-1">{data.name}</td>
            <td className="border px-2 py-1">{data.age}</td>
            <td className="border px-2 py-1">{data.diagnosis}</td>
            <td className="border px-2 py-1 text-right">
                {data.total.toLocaleString()} ₫
            </td>
            <td className="border px-2 py-1">{data.createdBy}</td>
            <td className="border px-2 py-1">{data.createdAt}</td>
            <td className="border px-2 py-1 space-x-2 text-lg">
                <button onClick={onClick} title="Chi tiết">👨‍⚕️</button>
                <button onClick={onClick} title="Sửa">✏️</button>
                <button title="Xóa">🗑️</button>
            </td>
        </tr>
    );
}
