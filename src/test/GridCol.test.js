import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { Grid, GridRow, GridCol } from '..';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) => shallow(<GridCol {...defaultProps} {...props} />);

describe('GridCol', () => {
    it('renders with custom class', () => {
        const el = renderShallow({ className: 'custom-class' });
        expect(el.hasClass('custom-class')).to.be(true);
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).to.be(true);
    });

    it('supports setting cols as a number', () => {
        const el = renderShallow({ lg: 10 });

        expect(el.hasClass('ffe-grid__col--lg-10')).to.be(true);
    });

    it('supports setting cols as a string', () => {
        const el = renderShallow({ sm: '1' });

        expect(el.hasClass('ffe-grid__col--sm-1')).to.be(true);
    });

    it('supports setting cols as an object', () => {
        const el = renderShallow({ md: { cols: 4 } });

        expect(el.hasClass('ffe-grid__col--md-4')).to.be(true);
    });

    it('supports setting cols and offset', () => {
        const el = renderShallow({ sm: { cols: 4, offset: '2' } });

        expect(el.hasClass('ffe-grid__col--sm-4')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).to.be(true);
    });

    it('does not set an offset class if no offset is provided', () => {
        const el = renderShallow({ lg: { cols: 7 } });

        expect(el.prop('className')).to.not.contain('offset');
    });

    it('sets the center modifier if the value is boolean true', () => {
        const el = renderShallow({ center: true });

        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('sets the center modifier as a string', () => {
        const el = renderShallow({ center: 'true' });

        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('sets the center modifier if the value is truthy', () => {
        const el = renderShallow({ center: 'wombats' });

        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('does not set the center modifier if the value is boolean false', () => {
        const el = renderShallow({ center: false });

        expect(el.hasClass('ffe-grid__col--center')).not.to.be(true);
    });

    it('sets the top modifier', () => {
        const el = renderShallow({ top: true });

        expect(el.hasClass('ffe-grid__col--top')).to.be(true);
    });

    it('sets all the things o/', () => {
        const el = renderShallow({
            sm: { cols: '6', offset: 2 },
            md: 8,
            lg: { cols: 2 },
            center: true,
            bottom: true,
            between: true,
            vertical: true,
            reverse: true,
        });

        expect(el.hasClass('ffe-grid__col--sm-6')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).to.be(true);
        expect(el.hasClass('ffe-grid__col--md-8')).to.be(true);
        expect(el.hasClass('ffe-grid__col--lg-2')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
        expect(el.hasClass('ffe-grid__col--bottom')).to.be(true);
        expect(el.hasClass('ffe-grid__col--between')).to.be(true);
        expect(el.hasClass('ffe-grid__col--vertical')).to.be(true);
        expect(el.hasClass('ffe-grid__col--reverse')).to.be(true);
    });

    it('preserves other attributes that are passed to it', () => {
        const handler = sinon.spy();
        const el = renderShallow({ onClick: handler });

        el.simulate('click');

        expect(handler.calledOnce).to.be(true);
    });

    it('can render a custom root element', () => {
        const el = renderShallow({ element: 'section' });

        expect(el.type()).to.be('section');
    });

    it('does not pass on known properties to its root element', () => {
        const el = renderShallow({ center: true, reverse: true });

        expect(el.props().center).to.be(undefined);
        expect(el.props().reverse).to.be(undefined);
    });

    it('can render with offset 0 and columns 0', () => {
        const el = renderShallow({ md: { cols: 0, offset: 0 }});

        expect(el.hasClass('ffe-grid__col--md-offset-0')).to.be(true);
        expect(el.hasClass('ffe-grid__col--md-0')).to.be(true);
    });

    it('can render with offset 1 and columns 1', () => {
        const el = renderShallow({ md: { cols: 1, offset: 1 }});

        expect(el.hasClass('ffe-grid__col--md-offset-1')).to.be(true);
        expect(el.hasClass('ffe-grid__col--md-1')).to.be(true);
    });

    it('defaults to sm={12} if no dimensions are provided', () => {
        const el = renderShallow();

        expect(el.hasClass('ffe-grid__col--sm-12')).to.be(true);
    });

    describe('when mounting', () => {
        beforeEach(() => {
            sinon.stub(console, 'error');
        });

        it('warns about nested <GridCol> tag', () => {
            mount(
                <Grid>
                    <GridRow>
                        <GridCol>
                            <div>
                                <div>
                                    <div>
                                        <GridCol>
                                            <div>hadoken</div>
                                        </GridCol>
                                    </div>
                                </div>
                            </div>
                        </GridCol>
                    </GridRow>
                </Grid>
            );

            expect(console.error.calledOnce).to.be(true);
            expect(console.error.getCall(0).args[0])
                .to.contain('Do not nest')
                .and.to.contain('<GridCol />');
        });

        it('does not blow up if a null-child is received', () => {
            // The below inline check on "false" will result in the outer <GridCol>
            // receiving children as an array-like of [<GridCol />, null] which it needs
            // to handle when checking for nesten grid columns.
            mount(
                <GridCol>
                    <GridCol />
                    { false && <GridCol /> }
                </GridCol>
            );
        });

        describe('and checking cols and offset validity', () => {
            const renderWithModifier = modifier => mount(
                <Grid>
                    <GridRow>
                        <GridCol {...modifier} />
                    </GridRow>
                </Grid>
            );

            it('does not warn about valid columns and offsets for "lg" screens', () => {
                renderWithModifier({ lg: { cols: 9, offset: 3 }});
                renderWithModifier({ lg: { cols: 1, offset: 11 }});
                renderWithModifier({ lg: { cols: 6, offset: 6 }});

                expect(console.error.called).to.be(false);
            });

            it('does not warn about valid columns and offsets for "md" screens', () => {
                renderWithModifier({ md: { cols: 6, offset: 4 }});
                renderWithModifier({ md: { cols: 12, offset: 0 }});
                renderWithModifier({ md: { cols: 2, offset: 8 }});
                renderWithModifier({ md: 6 });

                expect(console.error.called).to.be(false);
            });

            it('does not warn about valid columns and offsets for "sm" screens', () => {
                renderWithModifier({ sm: { cols: 6, offset: 6 }});
                renderWithModifier({ sm: { cols: 3, offset: 3 }});
                renderWithModifier({ sm: { cols: 12, offset: 0 }});
                renderWithModifier({ sm: 12 });

                expect(console.error.called).to.be(false);
            });

            it('warns about not sticking to 6 columns on "md" screens for objects', () => {
                renderWithModifier({ md: { cols: 1, offset: 1 }});

                expect(console.error.calledOnce).to.be(true);
                expect(console.error.getCall(0).args[0])
                    .to.contain('The grid should have 6 columns for "md" screens');
            });

            it('warns about not sticking to 6 columns on "md" screens for numbers', () => {
                renderWithModifier({ md: 9 });

                expect(console.error.calledOnce).to.be(true);
                expect(console.error.getCall(0).args[0])
                    .to.contain('The grid should have 6 columns for "md" screens');
            });

            it('warns about not sticking to 4 columns on "sm" screens for objects', () => {
                renderWithModifier({ sm: { cols: 11, offset: 1 }});

                expect(console.error.calledOnce).to.be(true);
                expect(console.error.getCall(0).args[0])
                    .to.contain('The grid should have 4 columns for "sm" screens');
            });

            it('warns about not sticking to 4 columns on "sm" screens for numbers', () => {
                renderWithModifier({ sm: 5 });

                expect(console.error.calledOnce).to.be(true);
                expect(console.error.getCall(0).args[0])
                    .to.contain('The grid should have 4 columns for "sm" screens');
            });
        });

        afterEach(() => {
            console.error.restore();
        });
    });
});
