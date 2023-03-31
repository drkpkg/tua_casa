CREATE OR REPLACE FUNCTION transfer_property(p_property_id INTEGER, p_seller_id INTEGER, p_buyer_id INTEGER, p_sale_price NUMERIC) RETURNS VOID AS $$
BEGIN
  -- Verificar si la propiedad pertenece al vendedor actual
  IF (SELECT customer_id FROM properties WHERE properties.id = p_property_id) <> p_seller_id THEN
    RAISE EXCEPTION 'El vendedor actual no es el dueño de la propiedad';
  END IF;

  -- Actualizar la propiedad con el ID del nuevo comprador
  UPDATE properties SET customer_id = p_buyer_id WHERE id = p_property_id;

  -- Registrar la transferencia en la tabla de transferencias de propiedades
  INSERT INTO property_transfers (property_id, seller_id, buyer_id, transfer_date, sale_price)
  VALUES (p_property_id, p_seller_id, p_buyer_id, CURRENT_DATE, p_sale_price);
END;
$$ LANGUAGE plpgsql;
