class ClothingItemSeeder
  def create_clothing_item!(purposes: [], purchases:, **clothing_item_params)
    clothing_item = ClothingItem.new(clothing_item_params)

    purposes.each do |purpose_name|
      purpose = Purpose.find_by(name: purpose_name)
      purpose ||= Purpose.new(name: purpose_name)

      clothing_item.purposes << purpose
    end

    purchases.each do |purchase_params|
      clothing_item.purchases << Purchase.new(purchase_params)
    end

    clothing_item.save!
  end
end
