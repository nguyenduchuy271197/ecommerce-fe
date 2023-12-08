
Customers
- id
- name
- email
- address
- phone

Products
- id
- name
- description
- price
- category_id (foreign key to categories table)
- inventory_count
- created_at

Categories
- id
- name

Orders
- id
- customer_id (foreign key to customers table)
- order_date
- shipped_date
- delivery_date
- status

OrderItems
- id
- order_id (foreign key to orders table)
- product_id (foreign key to products table)
- quantity
- unit_price
