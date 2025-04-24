export default function PatientDetail({ data }) {
    if (!data) return <p>Không có dữ liệu bệnh nhân.</p>;
    return (
        <div className="bg-white border p-4 shadow rounded text-sm">
            <h2 className="text-lg font-semibold mb-2">🧍 Thông tin bệnh nhân</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div><strong>Mã bệnh nhân:</strong> {data.id}</div>
                <div><strong>Tên:</strong> {data.name}</div>
                <div><strong>Giới tính:</strong> {data.gender}</div>
                <div><strong>Tuổi/Năm sinh:</strong> {data.age}</div>
                <div><strong>Điện thoại:</strong> {data.phone}</div>
                <div><strong>Địa chỉ:</strong> {data.address}</div>
                <div><strong>Nghề nghiệp:</strong> {data.occupation}</div>
                <div><strong>Tiền sử:</strong> {data.medicalHistory}</div>
            </div>
            <div className="mt-2 text-sm">
                <strong>Sinh hiệu:</strong> Mạch: {data.pulse}, Thân nhiệt: {data.temperature}°C, Huyết áp: {data.bloodPressure}, Cân nặng: {data.weight}
            </div>
        </div>
    );
}