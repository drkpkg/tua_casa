-- 924d041a-25c1-4ce4-83d7-7a04a6498653 testuser@test.com
-- bc200175-a0bd-4c33-b6e2-cd3a60ae938a admintest@test.com
-- 81707803-131f-40ae-8e0a-05a26948d1d8 customertest1@test.com
-- 5da968f4-cf1f-4997-a363-74cf6230470f customertest2@test.com

-- Insert para la tabla customers
INSERT INTO customers (first_name, last_name, phone, email, user_id)
VALUES ('Bruce', 'Wayne', '1234567890', 'testuser@test.com', '924d041a-25c1-4ce4-83d7-7a04a6498653'),
       ('Peter', 'Parker', '0987654321', 'admintest@test.com',

-- Insert para la tabla agents
INSERT INTO agents (first_name, last_name, city, commission_percentage, user_id)
VALUES ('Tony', 'Stark', 'New York', 5.00, '4b52c9ac-dc12-4a96-a50d-7db2c3cb3f5d'),
       ('Steve', 'Rogers', 'Washington', 3.50, '7d3d3e42-7a9c-4061-9d2d-2dbfb8a7902b'),
       ('Thor', 'Odinson', 'Asgard', 6.25, 'a6d39e09-8b33-4a7d-ba3e-5017ab10a69e'),
       ('Natasha', 'Romanoff', 'Moscow', 4.75, '4b52c9ac-dc12-4a96-a50d-7db2c3cb3f5d'),
       ('Clint', 'Barton', 'New York', 4.50, 'a6d39e09-8b33-4a7d-ba3e-5017ab10a69e');

-- Insert para la tabla properties
INSERT INTO properties (operation_type, location, size, photos, owners, price, availability_status, agent_id,
                        customer_id)
VALUES ('Rent', '5th Avenue, 123', 150.00, '{BINARY DATA}', 'John Doe', 2500.00, 'Available', 1, NULL),
       ('Sale', 'Broadway, 456', 250.00, '{BINARY DATA}', 'Jane Doe', 500000.00, 'Available', 2, NULL),
       ('Sale', 'Central Park, 789', 500.00, '{BINARY DATA}', 'Tony Stark', 1000000.00, 'Reserved', 1, NULL),
       ('Rent', 'Queens, 246', 80.00, '{BINARY DATA}', 'Peter Parker', 1500.00, 'Available', 3, NULL),
       ('Sale', 'Brooklyn, 135 ', 200.00, '{BINARY DATA}', 'Mary Jane', 750000.00, 'Reserved', 4, NULL),
       ('Rent', 'Manhattan, 246', 100.00, '{BINARY DATA}', 'Bruce Wayne', 2000.00, 'Available', 5, NULL);

-- insert para la tabla property_transfers
insert into property_transfers (property_id, seller_id, buyer_id, transfer_date, sale_price)
values (3, 1, 2, '2020-01-01', 1000000.00),
       (5, 4, 3, '2020-01-01', 750000.00);

