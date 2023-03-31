CREATE TABLE customers
(
  id         SERIAL PRIMARY KEY,
  first_name VARCHAR(50)  NOT NULL,
  last_name  VARCHAR(50)  NOT NULL,
  phone      VARCHAR(20)  NOT NULL,
  email      VARCHAR(100) NOT NULL,
  user_id    uuid         NOT NULL REFERENCES auth.users (id),
  created_at TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE TABLE agents
(
  id                    SERIAL PRIMARY KEY,
  first_name            VARCHAR(50)   NOT NULL,
  last_name             VARCHAR(50)   NOT NULL,
  city                  VARCHAR(50)   NOT NULL,
  commission_percentage NUMERIC(5, 2) NOT NULL,
  user_id               uuid          NOT NULL REFERENCES auth.users (id),
  created_at            TIMESTAMP     NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMP     NOT NULL DEFAULT NOW()
);

CREATE TABLE properties
(
  id                  SERIAL PRIMARY KEY,
  operation_type      VARCHAR(20)    NOT NULL,
  location            VARCHAR(100)   NOT NULL,
  size                NUMERIC(10, 2) NOT NULL,
  photos              BYTEA[]        NOT NULL,
  owners              VARCHAR(200)   NOT NULL,
  price               NUMERIC(10, 2) NOT NULL,
  availability_status VARCHAR(20)    NOT NULL,
  agent_id            INTEGER        NOT NULL REFERENCES agents (id),
  created_at          TIMESTAMP      NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMP      NOT NULL DEFAULT NOW(),
  customer_id         INTEGER REFERENCES customers (id)
);



CREATE TABLE interested_customers
(
  id             SERIAL PRIMARY KEY,
  customer_id    INTEGER        NOT NULL REFERENCES customers (id),
  property_id    INTEGER        NOT NULL REFERENCES properties (id),
  deposit_amount NUMERIC(10, 2) NOT NULL,
  created_at     TIMESTAMP      NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMP      NOT NULL DEFAULT NOW()
);

CREATE TABLE customer_properties
(
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER   NOT NULL REFERENCES customers (id),
  property_id INTEGER   NOT NULL REFERENCES properties (id),
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE property_transfers
(
  id            SERIAL PRIMARY KEY,
  property_id   INTEGER        NOT NULL REFERENCES properties (id),
  seller_id     INTEGER        NOT NULL REFERENCES customers (id),
  buyer_id      INTEGER        NOT NULL REFERENCES customers (id),
  transfer_date DATE           NOT NULL,
  sale_price    NUMERIC(10, 2) NOT NULL
);

CREATE TABLE attachments
(
  id         SERIAL PRIMARY KEY,
  model_name VARCHAR(100) NOT NULL,
  model_id   INTEGER      NOT NULL,
  file_name  VARCHAR(100) NOT NULL,
  file_type  VARCHAR(100) NOT NULL,
  file_size  INTEGER      NOT NULL,
  url        VARCHAR(100) NOT NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP    NOT NULL DEFAULT NOW()
);
