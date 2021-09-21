from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException


class TestEmailInput:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')
        self.driver.find_element_by_id('new-email-button').click()

    def test_email_input_displays_placeholder_when_no_email_chip_is_present(self):
        expected_id = "email-input"
        result = self.driver.find_element_by_id(
            expected_id).get_attribute('placeholder')
        expected_text = 'To'
        assert result == expected_text, f'Error. Expected {expected_text}, but could not find that text'

    def test_email_input_displays_email_list(self):
        expected_id = "email-list"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_input_creates_email_chip_on_return_key(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(f'test@test.com{Keys.RETURN}')
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'
    
    def test_email_input_creates_email_chip_on_tab_key(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(f'test@test.com{Keys.TAB}')
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_input_displays_no_placeholder_when_an_email_chip_is_present(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(f'test@test.com{Keys.TAB}')
        expected_id = "email-input"
        result = self.driver.find_element_by_id(
            expected_id).get_attribute('placeholder')
        expected_text = ''
        assert result == expected_text, f'Error. Expected {expected_text}, but could not find that text'

    def teardown_method(self):
        self.driver.quit()
