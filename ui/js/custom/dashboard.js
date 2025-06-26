
$(function () {
    const orderListApiUrl = "http://127.0.0.1:5000/getAllOrders";

    $.get(orderListApiUrl, function (orders) {
        if (orders) {
            const groupedOrders = {};
            let grandTotal = 0;

            // Group orders by readable date
            orders.forEach(order => {
                const dateObj = new Date(order.date || order.datetime);
                const dateKey = dateObj.toDateString(); // "Fri Jun 20 2025"
                if (!groupedOrders[dateKey]) {
                    groupedOrders[dateKey] = [];
                }
                groupedOrders[dateKey].push(order);
            });

            let table = '';

            Object.keys(groupedOrders).forEach(date => {
                let dayTotal = 0;

                groupedOrders[date].forEach(order => {
                    const orderDate = new Date(order.date || order.datetime).toUTCString();
                    const orderId = order.order_number || order.order_id;
                    const customer = order.customer_name;
                    const total = parseFloat(order.total_cost || order.total).toFixed(2);

                    table += `<tr>
                        <td>${orderDate}</td>
                        <td>${orderId}</td>
                        <td>${customer}</td>
                        <td>${total} Rs</td>
                    </tr>`;

                    dayTotal += parseFloat(total);
                    grandTotal += parseFloat(total);
                });

                // Append day total
                table += `<tr style="font-weight:bold; background-color:#e9f9ff;">
                    <td colspan="3" style="text-align:right;">Total for ${date}</td>
                    <td>${dayTotal.toFixed(2)} Rs</td>
                </tr>`;
            });

            // Append grand total
            table += `<tr style="font-weight:bold; background-color:#dff0d8;">
                <td colspan="3" style="text-align:right;">Grand Total</td>
                <td>${grandTotal.toFixed(2)} Rs</td>
            </tr>`;

            // ✅ Render in correct table body
            $("#order-table-body").html(table);
        }
    });
});
