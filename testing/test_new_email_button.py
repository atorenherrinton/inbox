from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


class TestNewEmailButton:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')

    def test_clicking_new_email_button_opens_email_card(self):
        self.driver.find_element_by_id('new-email-button').click()
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(result) == 1, f'Error. Expected {expected_id}, but could not find that id'
    
    def test_clicking_new_email_button_makes_it_disappear(self):
        self.driver.find_element_by_id('new-email-button').click()
        expected_id = "new-email-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'


    def teardown_method(self):
        self.driver.quit()
