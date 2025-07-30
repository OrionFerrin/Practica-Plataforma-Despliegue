export const MenuItem = {
    name: String,
    description: String,
    price: Number,
    available: Boolean
};

export const Order = {
    items: [MenuItem],
    totalAmount: Number,
    orderDate: Date,
    status: String
};