export default function InvoiceDetail({ data }) {
    if (!data) return <p>Không có dữ liệu hóa đơn.</p>;
    return (
        <div className="bg-white border p-4 shadow rounded text-sm">
            <h2 className="text-lg font-semibold mb-2">🧾 Thông tin hóa đơn</h2>
            <table className="w-full border text-center text-xs">
                <thead className="bg-gray-100">
                    <tr>
                        <th>#</th>
                        <th>Tên thuốc</th>
                        <th>Đơn vị</th>
                        <th>Số lượng</th>
                        <th>Giá bán</th>
                        <th>Tổng cộng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((item, i) => (
                        <tr key={i} className="border-t">
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.unit}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-2 text-right font-medium">
                Tổng cộng: {data.total} VND
            </div>
        </div>
    );
}