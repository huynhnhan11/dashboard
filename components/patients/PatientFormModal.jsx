import { useState } from "react";

export default function PatientFormModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        id: "BN00000006",
        name: "",
        gender: "Nam",
        age: "",
        phone: "",
        address: "",
        occupation: "",
        group: "Thứ tự chờ khám",
        weight: "",
        height: "",
        pulse: "",
        temperature: "",
        bloodPressure: "",
        medicalHistory: "",
        createdAt: new Date().toISOString().slice(0, 10), // yyyy-mm-dd
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-4xl max-h-[90%] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">➕ Thêm bệnh nhân</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <label className="block font-medium">Mã bệnh nhân</label>
                        <input value={formData.id} disabled className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Tên bệnh nhân</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="input" />
                    </div>

                    <div>
                        <label className="block font-medium">Tuổi / năm sinh</label>
                        <input name="age" value={formData.age} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Giới tính</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Cân nặng</label>
                        <input name="weight" value={formData.weight} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Chiều cao</label>
                        <input name="height" value={formData.height} onChange={handleChange} className="input" />
                    </div>

                    <div>
                        <label className="block font-medium">Mạch</label>
                        <input name="pulse" value={formData.pulse} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Thân nhiệt</label>
                        <input name="temperature" value={formData.temperature} onChange={handleChange} className="input" />
                    </div>

                    <div>
                        <label className="block font-medium">Huyết áp</label>
                        <input name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Điện thoại</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} className="input" />
                    </div>

                    <div>
                        <label className="block font-medium">Địa chỉ</label>
                        <input name="address" value={formData.address} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Nghề nghiệp</label>
                        <input name="occupation" value={formData.occupation} onChange={handleChange} className="input" />
                    </div>

                    <div>
                        <label className="block font-medium">Tiền sử</label>
                        <input name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="input" />
                    </div>
                    <div>
                        <label className="block font-medium">Ngày lập</label>
                        <input name="createdAt" value={formData.createdAt} onChange={handleChange} className="input" />
                    </div>
                </div>

                <div className="flex justify-end mt-6 gap-3">
                    <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-1 rounded">Hoàn tất</button>
                    <button onClick={onClose} className="bg-gray-400 text-white px-4 py-1 rounded">Bỏ qua</button>
                </div>
            </div>
        </div>
    );
}
