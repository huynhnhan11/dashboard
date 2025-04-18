export default function PrescriptionDetail({ data }) {
    if (!data) return <p>Không có dữ liệu đơn thuốc.</p>;
    return (
        <div className="bg-white border p-4 shadow rounded text-sm">
            <h2 className="text-lg font-semibold mb-2">💊 Thông tin đơn thuốc</h2>
            <table className="w-full border text-center text-xs">
                <thead className="bg-gray-100">
                    <tr>
                        <th>#</th>
                        <th>Mã thuốc</th>
                        <th>Số đăng ký</th>
                        <th>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Đơn vị</th>
                        <th>Cách dùng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.medicines.map((med, i) => (
                        <tr key={i} className="border-t">
                            <td>{i + 1}</td>
                            <td>{med.code}</td>
                            <td>{med.registration}</td>
                            <td>{med.name}</td>
                            <td>{med.quantity}</td>
                            <td>{med.unit}</td>
                            <td>{med.usage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-2 font-medium">🩺 Chẩn đoán: {data.diagnosis}</p>
            <p className="mt-1 italic">🗒️ Lời dặn: {data.note}</p>
        </div>
    );
}