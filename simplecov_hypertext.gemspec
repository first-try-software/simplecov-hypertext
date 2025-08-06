# frozen_string_literal: true

$LOAD_PATH.push File.expand_path("../lib", __FILE__)
require "simplecov_hypertext/version"

Gem::Specification.new do |gem|
  gem.name        = "simplecov-hypertext"
  gem.version     = SimpleCov::Formatter::HypertextFormatter::VERSION
  gem.platform    = Gem::Platform::RUBY
  gem.authors     = ["Christoph Olszowka", "Alan Ridlehoover", "Fito von Zastrow"]
  gem.email       = ["admin@firsttry.software"]
  gem.homepage    = "https://github.com/first-try-software/simplecov-hypertext"
  gem.description = %(Hypertext formatter for SimpleCov code coverage tool that supports large codebases.)
  gem.summary     = gem.description
  gem.license     = "MIT"

  gem.required_ruby_version = ">= 2.4"

  gem.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").reject do |f|
      (File.expand_path(f) == __FILE__) ||
        f.start_with?(*%w[bin/ test/ spec/ features/ .git .github appveyor Gemfile Gemfile.lock assets .rubocop.yml Guardfile .tool-versions])
    end
  end
  gem.executables   = `git ls-files -- bin/*`.split("\n").map { |f| File.basename(f) }
  gem.require_paths = ["lib"]
  gem.metadata["rubygems_mfa_required"] = "true"
end
