outfit = Outfit.find_or_create_by!(name: 'Favorite')
json.partial! 'outfits/outfit', outfit: outfit
