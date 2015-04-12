class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :name
      t.string :category
      t.string :image_url
      t.integer :times_done

      t.timestamps
    end
  end
end
