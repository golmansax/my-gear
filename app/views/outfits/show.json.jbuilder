json.partial! 'outfit', outfit: @outfit
json.clothing_items @outfit.clothing_items,
                    partial: 'clothing_items/clothing_item',
                    as: :clothing_item
