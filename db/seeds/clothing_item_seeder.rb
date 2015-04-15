class ClothingItemSeeder
  def create_clothing_item!(purposes: [], purchases:, **clothing_item_params)
    clothing_item = ClothingItem.new(clothing_item_params)

    purchases.each do |purchase_params|
      purchase = Purchase.new(purchase_params)
      clothing_item.purchases << purchase

      purposes.each do |purpose_name|
        purpose = Purpose.find_by(name: purpose_name)
        purpose ||= Purpose.new(name: purpose_name)

        purchase.purposes << purpose
      end
      clothing_item.save!
    end
  end
end
