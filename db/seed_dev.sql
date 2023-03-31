-- 1fd3ff69-39ef-4aad-9d4c-6e3ccddf3531,authenticated,authenticated,agent1@test.com
-- 99ab7f37-bf52-40fa-aa22-4021f64cd154,authenticated,authenticated,agent2@test.com
-- Insert para la tabla customers
INSERT INTO customers (first_name, last_name, phone, email, user_id)
VALUES ('Bruce', 'Wayne', '1234567890', 'testuser@test.com', '924d041a-25c1-4ce4-83d7-7a04a6498653'),
       ('Peter', 'Parker', '0987654321', 'admintest@test.com', 'bc200175-a0bd-4c33-b6e2-cd3a60ae938a'),
       ('Mary', 'Jane', '1234567890', 'customertest1@test.com', '81707803-131f-40ae-8e0a-05a26948d1d8'),
       ('John', 'Doe', '0987654321', 'customertest2@test.com', '5da968f4-cf1f-4997-a363-74cf6230470f');
-- Insert para la tabla agents
INSERT INTO agents (first_name, last_name, city, commission_percentage, user_id)
VALUES ('Tony', 'Stark', 'New York', 5.00, '1fd3ff69-39ef-4aad-9d4c-6e3ccddf3531'),
        ('Steve', 'Rogers', 'Washington', 3.50, '99ab7f37-bf52-40fa-aa22-4021f64cd154');

-- Insert para la tabla properties
INSERT INTO properties (operation_type, location, size, photos, owners, price, availability_status, agent_id,
                        customer_id)
VALUES ('Rent', '5th Avenue, 123', 150.00, '{BINARY DATA}', 'John Doe', 2500.00, 'Available', 6, NULL),
       ('Sale', 'Broadway, 456', 250.00, '{BINARY DATA}', 'Jane Doe', 500000.00, 'Available', 7, NULL),
       ('Sale', 'Central Park, 789', 500.00, '{BINARY DATA}', 'Tony Stark', 1000000.00, 'Reserved', 6, NULL),
       ('Rent', 'Queens, 246', 80.00, '{BINARY DATA}', 'Peter Parker', 1500.00, 'Available', 6, NULL),
       ('Sale', 'Brooklyn, 135 ', 200.00, '{BINARY DATA}', 'Mary Jane', 750000.00, 'Reserved', 7, NULL),
       ('Rent', 'Manhattan, 246', 100.00, '{BINARY DATA}', 'Bruce Wayne', 2000.00, 'Available', 7, NULL);

-- insert para la tabla property_transfers
insert into property_transfers (property_id, seller_id, buyer_id, transfer_date, sale_price)
values (13, 1, 2, '2020-01-01', 1000000.00),
       (14, 2, 3, '2020-01-01', 750000.00);

