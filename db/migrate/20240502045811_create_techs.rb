class CreateTechs < ActiveRecord::Migration[7.1]
  def change
    create_table :techs do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
