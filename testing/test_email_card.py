from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import time


class TestEmailCard:
    driver = ''

    def setup_method(self):
        self.driver = webdriver.Chrome(
            executable_path="/Users/atorenherrinton/Development/my-apps/inbox/testing/chromedriver")
        self.driver.implicitly_wait(1)
        self.driver.get('http://localhost:3000/')
        self.driver.find_element_by_id('new-email-button').click()

    def test_email_header_is_rendered(self):
        expected_id = "email-header"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_new_email_text_is_rendered_inside_email_header(self):
        expected_id = "new-email"
        result = self.driver.find_element_by_id(expected_id).text
        text = 'New Email'
        assert text == result, f'Error. Expected {text}, but could not find that text'

    def test_close_button_is_rendered_as_an_action(self):
        expected_id = "close-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_clicking_the_close_button_closes_the_email_card(self):
        close_button = self.driver.find_element_by_id("close-button")
        self.driver.execute_script("arguments[0].click();", close_button)
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def test_email_input_is_rendered(self):
        expected_id = "email-input"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_focus_changes_from_email_input_to_subject_if_tab_is_pressed_and_input_empty(self):
        self.driver.find_element_by_id(
            "email-input").send_keys(Keys.TAB)
        expected_id = 'subject-input'
        result = self.driver.switch_to.active_element.get_attribute("id")
        assert expected_id == result, f'Error. Expected {expected_id} to be focused, but {result} was focused'

    def test_focus_does_not_changes_from_email_input_to_subject_if_enter_pressed_and_input_empty(self):
        expected_id = 'email-input'
        self.driver.find_element_by_id(
            expected_id).send_keys(Keys.ENTER)
        result = self.driver.switch_to.active_element.get_attribute("id")
        assert expected_id == result, f'Error. Expected {expected_id} to be focused, but {result} was focused'

    def test_no_email_address_chip_is_created_if_enter_pressed_and_email_input_empty(self):
        self.driver.find_element_by_id(
            'email-input').send_keys(Keys.ENTER)
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def test_no_email_address_chip_is_created_if_enter_pressed_and_email_input_empty(self):
        self.driver.find_element_by_id(
            'email-input').send_keys(Keys.ENTER)
        expected_id = 'email-chip'
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def test_email_input_is_not_minimized_if_there_is_no_email_chip(self):
        expected_id = "email-input"
        self.driver.find_element_by_id(
            expected_id).send_keys(Keys.TAB)
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_input_minimizes_if_there_is_at_least_one_email_address_and_tab_is_pressed(self):
        expected_id = "email-input"
        self.driver.find_element_by_id(
            expected_id).send_keys(f'test@test.com{Keys.RETURN}{Keys.TAB}')
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected not to find {expected_id}, but could it was present'

    def test_email_input_reopens_if_email_chip_delete_key_pressed(self):
        expected_id = "email-input"
        self.driver.find_element_by_id(
            expected_id).send_keys(f'test@test.com{Keys.TAB}{Keys.TAB}')
        self.driver.find_element_by_id("email-chip").click()
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_email_input_reopens_if_email_chip_is_pressed(self):
        expected_id = "email-input"
        self.driver.find_element_by_id(
            expected_id).send_keys(f'test@test.com{Keys.TAB}{Keys.TAB}')
        self.driver.find_element_by_id("email-chip").click()
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected to find {expected_id}, but could it was not present'

    def test_email_input_matches_value_from_chip_when_pressed(self):
        input_text = 'test@test.com'
        self.driver.find_element_by_id(
            "email-input").send_keys(input_text + Keys.TAB + Keys.TAB)
        self.driver.find_element_by_id("email-chip").click()
        expected_id = "email-input"
        result = self.driver.find_element_by_id(expected_id)
        assert input_text == result.get_attribute(
            'value'), f'Error. Expected the input text {input_text} to match the result text {result.text} but it did not'

    def test_email_input_focuses_when_chip_is_pressed(self):
        input_text = 'test@test.com'
        self.driver.find_element_by_id(
            "email-input").send_keys(input_text + Keys.TAB + Keys.TAB)
        self.driver.find_element_by_id("email-chip").click()
        expected_id = 'email-input'
        result = self.driver.switch_to.active_element.get_attribute("id")
        assert expected_id == result, f'Error. Expected {expected_id} to be focused, but {result} was focused'

    def test_email_input_focuses_when_delete_button_on_chip_is_pressed(self):
        input_text = 'test@test.com'
        self.driver.find_element_by_id(
            "email-input").send_keys(input_text + Keys.TAB + Keys.TAB)
        self.driver.find_element_by_class_name("MuiChip-deleteIcon").click()
        expected_id = 'email-input'
        result = self.driver.switch_to.active_element.get_attribute("id")
        assert expected_id == result, f'Error. Expected {expected_id} to be focused, but {result} was focused'

    def test_subject_input_is_rendered(self):
        expected_id = "subject-input"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_subject_input_displays_subject(self):
        expected_id = "subject-input"
        result = self.driver.find_element_by_id(
            expected_id).get_attribute('placeholder')
        expected_text = 'Subject'
        assert result == expected_text, f'Error. Expected {expected_text}, but could not find that text'

    def test_text_area_is_rendered(self):
        expected_id = "email-body"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_send_button_rendered(self):
        expected_id = "send-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_attachment_button_rendered(self):
        expected_id = "attachment-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_delete_button_rendered(self):
        expected_id = "delete-button"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 1, f'Error. Expected {expected_id}, but could not find that id'

    def test_clicking_delete_button_closes_email(self):
        self.driver.find_element_by_id('delete-button').click()
        expected_id = "email-card"
        result = self.driver.find_elements_by_id(expected_id)
        assert len(
            result) == 0, f'Error. Expected {expected_id} to not to be there, but it was displayed'

    def teardown_method(self):
        self.driver.quit()
