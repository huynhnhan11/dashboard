// src/components/PrescriptionRow.jsx

export default function PrescriptionRow({ data, index, onClick }) {
    return (
        <tr className="text-center hover:bg-gray-100 transition cursor-pointer">
            <td className="py-2 px-2 border border-gray-300">{index + 1}</td>
            <td className="py-2 px-2 border border-gray-300">{data.code}</td>
            <td className="py-2 px-2 border border-gray-300">{data.name}</td>
            <td className="py-2 px-2 border border-gray-300">{data.age}</td>
            <td className="py-2 px-2 border border-gray-300">{data.diagnosis}</td>
            <td className="py-2 px-2 border border-gray-300">{data.total.toLocaleString()} ₫</td>
            <td className="py-2 px-2 border border-gray-300">{data.createdBy}</td>
            <td className="py-2 px-2 border border-gray-300">{data.createdAt}</td>
            <td className="py-2 px-2 border border-gray-300 space-x-2">
                <button
                    onClick={onClick}
                    className="text-emerald-600 hover:underline font-medium"
                >
                    Xem chi tiết
                </button>
                <button className="text-blue-600 hover:underline font-medium">Sửa</button>
            </td>
        </tr>
    );
}
