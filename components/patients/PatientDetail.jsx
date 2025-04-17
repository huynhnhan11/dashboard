import { useNavigate } from "react-router-dom";

export default function PatientDetail({ patient }) {
    const navigate = useNavigate();
    return (
        <div className="border p-4 bg-white mt-4 shadow rounded">
            <h2 className="text-lg font-semibold mb-2">Thông tin bệnh nhân</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Mã bệnh nhân: <strong>{patient.id}</strong></div>
                <div>Tên bệnh nhân: <strong>{patient.name}</strong></div>
                <div>Giới tính: {patient.gender}</div>
                <div>Tuổi/năm sinh: {patient.age || ""}</div>
                <div>Điện thoại: {patient.phone || ""}</div>
                <div>Địa chỉ: {patient.address || ""}</div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <button className="bg-gray-700 text-white px-3 py-1 rounded">ĐÃ KHÁM XONG</button>
                <button className="bg-yellow-600 text-white px-3 py-1 rounded">THAY ĐỔI</button>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded">THÊM HÓA ĐƠN</button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded">THÊM CHỈ ĐỊNH</button>
                <button
                    className="bg-pink-500 text-white px-3 py-1 rounded"
                    onClick={() => navigate(`/prescriptions/new/${patient.id}`)} 
                >
                    KÊ ĐƠN
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded">XÓA</button>
            </div>
        </div>
    );
}
