class Todo < ActiveRecord::Base
  validates(:name, :category, {presence: true})
  validates :name {uniqueness: true}
  belongs_to :user
end
