import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as caseActions } from '../redux/modules/cases'
import { CaseListItem } from './'
import { Table } from 'react-bootstrap'

const mapStateToProps = (state) => ({
  cases: state.cases.cases,
  cases_archived: state.cases.cases_archived,
  cases_deleted: state.cases.cases_deleted
})

export default class CaseList extends Component {
  static propTypes = {
    cases: PropTypes.array.isRequired,
    cases_archived: PropTypes.array.isRequired,
    cases_deleted: PropTypes.array.isRequired,
    deleteCase: PropTypes.func.isRequired,
    archiveCase: PropTypes.func.isRequired,
    loadCases: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
  };

  getCases (filter) {
    if (filter === 'archive') {
      return this.props.cases_archived
    } else {
      return this.props.cases
    }
  }

  render () {
    const filter = this.props.params.filter
    const cases = this.getCases(filter)
    const hasCases = cases.length > 0
    const nodes = !hasCases
      ? <tr><td>There are current no cases in this view.</td></tr>
    : cases.map(caseobj =>
          <CaseListItem
            key={caseobj.id}
            id={caseobj.id}
            opened_at={caseobj.opened_at}
            from={caseobj.from}
            subject={caseobj.subject}
            onCaseDeleteClicked={this.props.deleteCase}
            onCaseArchiveClicked={this.props.archiveCase} />
        )

    return (
      <Table responsive hover>
        <tbody>
         { nodes }
         {this.props.children}
        </tbody>
      </Table>
    )
  }
}

export default connect(mapStateToProps, caseActions)(CaseList)