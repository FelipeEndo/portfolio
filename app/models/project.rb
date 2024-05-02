class Project < ApplicationRecord
  has_and_belongs_to_many :techs

  validates :name, presence: true
end
