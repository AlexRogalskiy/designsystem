/* eslint-env mocha */
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';
import DateInput from '../input';
import Calendar from '../calendar';
import Datepicker from './Datepicker';
import i18n from '../i18n/i18n';
import ErrorTypes from '../datelogic/error-types';

describe('<Datepicker />', () => {
    const errorClass = '.ffe-field-error-message';

    let defaultProps;
    let wrapper;

    beforeEach(() => {
        defaultProps = {
            value: '',
            onChange: () => {},
            language: 'nb',
        };
    });

    describe('with empty value', () => {
        beforeEach(() => {
            wrapper = shallow(<Datepicker {...defaultProps} />);
        });

        it('renders a wrapper for the datepicker components', () =>
            expect(wrapper).to.have.descendants('.ffe-datepicker'));

        it('contains a single DateInput component', () =>
            expect(wrapper)
                .to.have.exactly(1)
                .descendants(DateInput));

        it('does not contain a Calendar component', () =>
            expect(wrapper).to.not.have.descendants(Calendar));

        it('does not have an error message', () =>
            expect(wrapper).to.not.have.descendants(errorClass));
    });

    describe('with focus on DateInput', () => {
        beforeEach(() => {
            wrapper = mount(<Datepicker {...defaultProps} />);
            const input = wrapper.find(DateInput).find('input');
            input.simulate('focus');
        });

        it('contains a Calendar', () =>
            expect(wrapper)
                .to.have.exactly(1)
                .descendants(Calendar));
    });

    describe('with click on DateInput', () => {
        beforeEach(() => {
            wrapper = mount(<Datepicker {...defaultProps} />);
            const input = wrapper.find(DateInput).find('input');
            input.simulate('click');
        });

        it('contains a Calendar', () =>
            expect(wrapper)
                .to.have.exactly(1)
                .descendants(Calendar));
    });

    describe('with click after errors', () => {
        let input;

        beforeEach(() => {
            wrapper = mount(<Datepicker {...defaultProps} />);
            input = wrapper.find(DateInput).find('input');
            wrapper.setProps({ value: 'invalid date' });
            input.simulate('blur');
            input.simulate('click');
        });

        it('works when field contains invalid input', () => {
            expect(wrapper).to.have.descendants(errorClass);
            expect(wrapper).to.have.descendants(Calendar);
        });
    });

    describe('when input field changes', () => {
        let onChange;

        beforeEach(() => {
            onChange = spy();
            wrapper = mount(
                <Datepicker {...defaultProps} onChange={onChange} />,
            );
            const input = wrapper.find(DateInput).find('input');
            input.simulate('change', { target: { value: '14.03.2017' } });
        });

        it('calls onChange method', () =>
            expect(onChange).to.have.been.calledOnce);
    });

    describe('given prop', () => {
        describe('calendarAbove', () => {
            let calendar;

            beforeEach(() => {
                wrapper = mount(
                    <Datepicker {...defaultProps} calendarAbove={true} />,
                );
                wrapper
                    .find(DateInput)
                    .find('input')
                    .simulate('focus');
                calendar = wrapper.find(Calendar);
            });

            it('has correct calendar above class', () =>
                expect(calendar).to.have.className(
                    'ffe-calendar--datepicker--above',
                ));
        });

        describe('onError', () => {
            let onError;

            beforeEach(() => {
                onError = spy();
                wrapper = mount(
                    <Datepicker
                        {...defaultProps}
                        value={'iamturtles'}
                        onError={onError}
                    />,
                );
                const input = wrapper.find(DateInput).find('input');
                input.simulate('blur');
            });

            it('runs the error callback', () =>
                expect(onError).to.have.been.calledWithExactly(
                    ErrorTypes.INVALID_DATE_FORMAT,
                    i18n.nb[ErrorTypes.INVALID_DATE_FORMAT],
                ));
        });

        describe('ariaInvalid', () => {
            let input;

            beforeEach(() => {
                wrapper = mount(
                    <Datepicker {...defaultProps} ariaInvalid={true} />,
                );
                input = wrapper.find(DateInput).find('input');
            });

            it('has correct aria-invalid value if given prop', () =>
                expect(input).to.have.attr('aria-invalid', 'true'));
        });

        describe('inputProps', () => {
            let input;

            beforeEach(() => {
                wrapper = mount(
                    <Datepicker
                        {...defaultProps}
                        inputProps={{
                            className: 'customClass',
                            id: 'custom-input-id',
                        }}
                    />,
                );
                input = wrapper.find(DateInput).find('input');
            });

            it('is passed on to input field', () => {
                expect(input).to.have.className('customClass');
                expect(input).to.have.id('custom-input-id');
            });
        });

        describe('onValidationComplete', () => {
            let onValidationComplete;

            beforeEach(() => {
                onValidationComplete = spy();
                wrapper = mount(
                    <Datepicker
                        {...defaultProps}
                        onValidationComplete={onValidationComplete}
                    />,
                );

                wrapper.setProps({ value: '14317' });

                const input = wrapper.find(DateInput).find('input');
                input.simulate('blur');
            });

            it('runs onValidationComplete with formatted and validated value', () => {
                expect(onValidationComplete).to.have.been.calledWith(
                    '14.03.2017',
                );
            });
        });
    });

    describe('validating input on blur', () => {
        describe('with invalid value', () => {
            beforeEach(() => {
                wrapper = mount(
                    <Datepicker {...defaultProps} value={'iamturtles'} />,
                );

                wrapper
                    .find(DateInput)
                    .find('input')
                    .simulate('blur');
            });

            it('has an error message', () =>
                expect(wrapper).to.have.descendants(errorClass));

            it('hides error message if hideErrors prop is true', () => {
                wrapper.setProps({ hideErrors: true });
                expect(wrapper).to.not.have.descendants(errorClass);
            });
        });

        describe('with date', () => {
            let errorMessage;

            describe('below minimum date', () => {
                beforeEach(() => {
                    wrapper = mount(
                        <Datepicker
                            {...defaultProps}
                            value="31.12.2014"
                            minDate="01.01.2016"
                        />,
                    );

                    wrapper
                        .find(DateInput)
                        .find('input')
                        .simulate('blur');
                    errorMessage = wrapper.find(errorClass);
                });

                it('has correct error-class', () =>
                    expect(wrapper).to.have.descendants(errorClass));

                it('has correct error-message', () =>
                    expect(errorMessage).to.have.text(i18n.nb.MIN_DATE));
            });

            describe('above maximum date', () => {
                beforeEach(() => {
                    wrapper = mount(
                        <Datepicker
                            {...defaultProps}
                            value="31.12.2016"
                            maxDate="01.01.2016"
                        />,
                    );

                    wrapper
                        .find(DateInput)
                        .find('input')
                        .simulate('blur');
                    errorMessage = wrapper.find(errorClass);
                });

                it('has correct error-class', () =>
                    expect(wrapper).to.have.descendants(errorClass));

                it('has correct error-message', () =>
                    expect(errorMessage).to.have.text(i18n.nb.MAX_DATE));
            });
        });
    });
    describe('validate input on minDate prop change', () => {
        describe('with minDate after maxDate', () => {
            let errorMessage;
            beforeEach(() => {
                wrapper = mount(
                    <Datepicker
                        {...defaultProps}
                        value={'15.11.2014'}
                        minDate={'01.11.2014'}
                        maxDate={'01.12.2014'}
                    />,
                );
                wrapper.setProps({ minDate: '01.01.2015' });
                wrapper.update();
                errorMessage = wrapper.find(errorClass);
            });

            it('has an error message', () =>
                expect(wrapper).to.have.descendants(errorClass));

            it('has correct error-message', () =>
                expect(errorMessage).to.have.text(i18n.nb.MIN_DATE));

            describe('setting valid minDate', () => {
                beforeEach(() => {
                    wrapper.setProps({ minDate: '01.11.2014' });
                    wrapper.update();
                });

                it('removes the error message', () =>
                    expect(wrapper).not.to.have.descendants(errorClass));
            });
        });
    });

    describe('validate input on maxDate prop change', () => {
        describe('with maxDate before minDate', () => {
            let errorMessage;
            beforeEach(() => {
                wrapper = mount(
                    <Datepicker
                        {...defaultProps}
                        value={'15.11.2014'}
                        minDate={'01.11.2014'}
                        maxDate={'01.12.2014'}
                    />,
                );
                wrapper.setProps({ maxDate: '01.01.2014' });
                wrapper.update();
                errorMessage = wrapper.find(errorClass);
            });

            it('has an error message', () =>
                expect(wrapper).to.have.descendants(errorClass));

            it('has correct error-message', () =>
                expect(errorMessage).to.have.text(i18n.nb.MAX_DATE));

            describe('setting valid maxDate', () => {
                beforeEach(() => {
                    wrapper.setProps({ maxDate: '01.12.2014' });
                    wrapper.update();
                });
                it('removes the error message', () =>
                    expect(wrapper).not.to.have.descendants(errorClass));
            });
        });
    });
});
