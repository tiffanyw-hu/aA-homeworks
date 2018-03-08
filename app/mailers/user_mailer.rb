class UserMailer < ApplicationMailer

  def welcome_email
    @user = user
    @url = 'lol'
    mail(to: everyone@appacademy.io, subject: 'W4D4 HW')
  end
  
end
