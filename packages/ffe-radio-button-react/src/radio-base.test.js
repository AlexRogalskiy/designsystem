/*eslint-env mocha*/
/*eslint no-unused-expressions:0*/
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import RadioBase from './radio-base';

describe('<RadioBase />', () => {
    describe('rendering', () => {
        describe('default', () => {
            const wrapper = shallow(
                <RadioBase labelClasses="" value="shark" label="Kjempetorsk" />,
            );

            it('should render an input with type radio', () => {
                expect(wrapper)
                    .to.have.exactly(1)
                    .descendants('input');
                expect(wrapper.find('input').prop('type')).to.equal('radio');
            });

            it('should render a label', () => {
                expect(wrapper)
                    .to.have.exactly(1)
                    .descendants('label');
            });

            it('should apply the same id to <label> and <input>', () => {
                const htmlFor = wrapper.find('label').prop('htmlFor');
                const id = wrapper.find('input').prop('id');
                expect(htmlFor).to.be.equal(id);
            });
        });

        it('should render a default value if passed', () => {
            let wrapper = shallow(<RadioBase labelClasses="" value="" />);
            expect(wrapper.find('input')).to.not.be.checked();

            wrapper = shallow(<RadioBase checked={true} labelClasses="" />);
            expect(wrapper.find('input')).to.be.checked();
        });

        it('should render the field disabled if specified', () => {
            let wrapper = shallow(<RadioBase labelClasses="" />);
            expect(wrapper.find('input').prop('disabled')).to.be.undefined;

            wrapper = shallow(<RadioBase labelClasses="" disabled={true} />);
            expect(wrapper.find('input').prop('disabled')).to.be.true;
        });

        it('should apply labelClasses to the label', () => {
            const wrapper = shallow(
                <RadioBase labelClasses="test-class" value="" />,
            );
            expect(wrapper.find('label').hasClass('test-class')).to.be.true;
        });

        it('should apply pass-through extra props', () => {
            const wrapper = shallow(
                <RadioBase
                    labelClasses=""
                    value="shark"
                    label="Kjempetorsk"
                    aria-describedby="svorsk"
                />,
            );
            expect(wrapper.find('input').prop('aria-describedby')).to.equal(
                'svorsk',
            );
        });
    });

    describe('interactivity', () => {
        before('init the fake DOM', () => {
            const dom = new JSDOM();
            global.window = dom.window;
            global.document = window.document;
        });

        it('should call onChange when clicked', () => {
            const spy = sinon.spy();
            const wrapper = shallow(
                <RadioBase onChange={spy} labelClasses="" />,
            );
            wrapper.find('input').simulate('change');
            expect(spy.calledOnce).to.be.true;
        });

        it('should call onChange with correct parameters', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <fieldset>
                    <RadioBase
                        name="fish"
                        value="hai"
                        onChange={spy}
                        labelClasses=""
                    />
                    <RadioBase
                        name="fish"
                        value="kjempetorsk"
                        onChange={spy}
                        labelClasses=""
                    />
                </fieldset>,
            );
            const shark = wrapper.find('input[value="hai"]');
            const giantCod = wrapper.find('input[value="kjempetorsk"]');

            shark.simulate('change');
            giantCod.simulate('change');
            shark.simulate('change');

            expect(spy.callCount).to.be.equal(3);
            expect(spy.getCall(0).args[0].target.value).to.equal('hai');
            expect(spy.getCall(1).args[0].target.value).to.equal('kjempetorsk');
            expect(spy.getCall(2).args[0].target.value).to.equal('hai');
            // Yes, I'm sad to say, but there actually are swedes who believe that the norwegian word for shark is kjempetorsk...
        });
    });

    describe('invalid', () => {
        it('sets missing prop to false', () => {
            const wrapper = shallow(<RadioBase value="Hei" labelClasses="" />);

            expect(wrapper.find('input').prop('aria-invalid')).to.equal(
                'false',
            );
            expect(wrapper.find('label').prop('className')).not.to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles boolean `false` aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid={false} />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal(
                'false',
            );
            expect(wrapper.find('label').prop('className')).not.to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles boolean `true` aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid={true} />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal('true');
            expect(wrapper.find('label').prop('className')).to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles string "false" aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid="false" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal(
                'false',
            );
            expect(wrapper.find('label').prop('className')).not.to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles string "true" aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid="true" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal('true');
            expect(wrapper.find('label').prop('className')).to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles boolean `false` invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid={false} />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal(
                'false',
            );
            expect(wrapper.find('label').prop('className')).not.to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles boolean `true` invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid={true} />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal('true');
            expect(wrapper.find('label').prop('className')).to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles string "false" invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid="false" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal(
                'false',
            );
            expect(wrapper.find('label').prop('className')).not.to.equal(
                'ffe-radio-button--invalid',
            );
        });

        it('handles string "true" invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid="true" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).to.equal('true');
            expect(wrapper.find('label').prop('className')).to.equal(
                'ffe-radio-button--invalid',
            );
        });
    });
});
