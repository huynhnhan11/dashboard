// src/components/PrescriptionRow.jsx
export default function PrescriptionRow({ data, index }) {
    return (
        <tr className="text-center hover:bg-gray-50">
            <td className="py-2 px-2 border border-gray-300">{index + 1}</td>
            <td className="py-2 px-2 border border-gray-300">{data.code}</td>
            <td className="py-2 px-2 border border-gray-300">{data.name}</td>
            <td className="py-2 px-2 border border-gray-300">{data.age}</td>
            <td className="py-2 px-2 border border-gray-300">{data.diagnosis}</td>
            <td className="py-2 px-2 border border-gray-300">{data.total.toLocaleString()} ₫</td>
            <td className="py-2 px-2 border border-gray-300">{data.createdBy}</td>
            <td className="py-2 px-2 border border-gray-300">{data.createdAt}</td>
            <td className="py-2 px-2 border border-gray-300">
                <button className="text-blue-600 hover:underline">Sửa</button>
            </td>
        </tr>
    );
}
