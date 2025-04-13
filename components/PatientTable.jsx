import React from 'react';

const patients = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        gender: 'Nam',
        phone: '0123456789',
        birth_date: '1990-01-01',
        occupation: 'Kỹ sư',
    },
    {
        id: 2,
        name: 'Trần Thị B',
        gender: 'Nữ',
        phone: '0987654321',
        birth_date: '1985-05-12',
        occupation: 'Giáo viên',
    },
];

const PatientTable = () => {
    return (
        <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="p-3">Họ tên</th>
                        <th className="p-3">Giới tính</th>
                        <th className="p-3">Số điện thoại</th>
                        <th className="p-3">Ngày sinh</th>
                        <th className="p-3">Nghề nghiệp</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {patients.map((p) => (
                        <tr key={p.id} className="hover:bg-gray-100">
                            <td className="p-3">{p.name}</td>
                            <td className="p-3">{p.gender}</td>
                            <td className="p-3">{p.phone}</td>
                            <td className="p-3">{p.birth_date}</td>
                            <td className="p-3">{p.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientTable;
