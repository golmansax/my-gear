class ClothingItemSeeder
  def create_clothing_item!(purchases: [], **clothing_item_params)
    clothing_item = ClothingItem.new(clothing_item_params)

    purchases.each do |purchase_params|
      clothing_item.purchases << create_purchase(purchase_params)
      clothing_item.save!
    end
  end

  def create_purchase(purposes: [], **purchase_params)
    purchase = Purchase.new(purchase_params)

    purposes.each do |purpose_name|
      purchase.purposes << find_or_create_purpose_by_name(purpose_name)
    end

    purchase
  end

  def find_or_create_purpose_by_name(name)
    Purpose.find_by(name: name) || Purpose.new(name: name)
  end
end
