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
        createdAt: new Date().toISOString().slice(0, 10),
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
            <div className="bg-white p-6 rounded-3xl shadow-lg w-[90%] max-w-5xl max-h-[95%] overflow-y-auto">
                <h2 className="text-lg font-bold mb-4 text-purple-700 flex items-center gap-2">
                    <span className="text-2xl">+</span> Thêm bệnh nhân
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Mã bệnh nhân</label>
                        <input value={formData.id} disabled className="w-full border px-2 py-1 rounded bg-gray-100" />
                    </div>
                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Tên bệnh nhân</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Tuổi / năm sinh</label>
                        <input name="age" value={formData.age} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Giới tính</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border px-2 py-1 rounded">
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khác</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Cân nặng</label>
                        <input name="weight" value={formData.weight} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Chiều cao</label>
                        <input name="height" value={formData.height} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Mạch</label>
                        <input name="pulse" value={formData.pulse} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Thân nhiệt</label>
                        <input name="temperature" value={formData.temperature} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Huyết áp</label>
                        <input name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Điện thoại</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Địa chỉ</label>
                        <input name="address" value={formData.address} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Nghề nghiệp</label>
                        <input name="occupation" value={formData.occupation} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Tiền sử</label>
                        <input name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1">Ngày lập</label>
                        <input name="createdAt" value={formData.createdAt} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
                    </div>
                </div>

                <div className="flex justify-end mt-6 gap-3">
                    <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Hoàn tất</button>
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Bỏ qua</button>
                </div>
            </div>
        </div>
    );
}
