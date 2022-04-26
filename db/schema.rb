# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_25_224856) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street"
    t.string "district"
    t.string "complement"
    t.bigint "city_id", null: false
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["city_id"], name: "index_addresses_on_city_id"
    t.index ["client_id"], name: "index_addresses_on_client_id"
  end

  create_table "buses", force: :cascade do |t|
    t.string "prefix"
    t.string "plate"
    t.string "model_description"
    t.string "year"
    t.boolean "toilet"
    t.integer "number_of_seats"
    t.boolean "active", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "full_name"
    t.string "type_document"
    t.string "document"
    t.string "cellphone"
    t.date "birthday"
    t.boolean "under_age"
    t.boolean "active", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "drivers", force: :cascade do |t|
    t.string "full_name"
    t.string "cpf"
    t.date "birthday"
    t.string "license"
    t.date "license_expiration_date"
    t.boolean "active", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "nickname"
    t.string "cellphone_one"
    t.string "cellphone_two"
  end

  create_table "travels", force: :cascade do |t|
    t.bigint "bus_id", null: false
    t.bigint "driver_id", null: false
    t.bigint "origin_id", null: false
    t.bigint "destination_id", null: false
    t.datetime "date", precision: 6
    t.integer "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bus_id"], name: "index_travels_on_bus_id"
    t.index ["destination_id"], name: "index_travels_on_destination_id"
    t.index ["driver_id"], name: "index_travels_on_driver_id"
    t.index ["origin_id"], name: "index_travels_on_origin_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "active", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "addresses", "cities"
  add_foreign_key "addresses", "clients"
  add_foreign_key "travels", "buses"
  add_foreign_key "travels", "cities", column: "destination_id"
  add_foreign_key "travels", "cities", column: "origin_id"
  add_foreign_key "travels", "drivers"
end
