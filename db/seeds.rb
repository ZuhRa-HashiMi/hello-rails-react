# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Greeting.create([
                  { text: 'Hello, world!' },
                  { text: 'Welcome to my app!' },
                  { text: 'Greetings, friend!' },
                  { text: 'Hi there!' },
                  { text: 'Nice to meet you!' }
                ])
