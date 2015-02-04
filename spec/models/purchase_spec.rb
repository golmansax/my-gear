require 'rails_helper'

describe Purchase do
  describe 'associations' do
    it { is_expected.to have_and_belong_to_many(:clothing_items) }
  end

  describe 'validations' do
    it { is_expected.to belong_to(:clothing_item) }
    it { is_expected.to validate_preence_of(:date) }
    it { is_expected.to validate_preence_of(:in_use) }
    it { is_expected.to validate_preence_of(:version) }
  end
end
