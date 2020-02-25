let builder = require('xmlbuilder');
let find = require('find');
let path = require('path');
let baseDir = path.join(__dirname,"/../../..");

/**
 * Used to create a new POM easily with the supplied dependencies
 */
class DependencyPOM {

	/**
	 * Default Constructor
	 * @param {String} version
	 * @param {String} distribGroupID
	 * @param {String} distribArtifactID
	 */
	constructor(version, distribGroupID, distribArtifactID)
	{
		this._distribGroupID = distribGroupID;
		this._distribArtifactID = distribArtifactID;
		this._version = version;
		this._pomRoot = builder.create('project',{encoding: 'UTF-8'});
		this._createHeader();
	}

	/**
	 <modelVersion>4.0.0</modelVersion>
	 <groupId>com.virtuefusion.gamescontent.assets</groupId>
	 <artifactId>bingo</artifactId>
	 <version>19.4.0-51</version>
	 <packaging>pom</packaging>
	 <name>Games Content Management :: Assets :: Bingo</name>
	 <description>
	 The distribution provided to the content server. It is not necessary to update this manually.
	 It is modified using the maven-ant-tasks as part of the build.
	 </description>
	 */
	_createHeader()
	{
		this._pomRoot.att('xmlns', 'http://maven.apache.org/POM/4.0.0');
		this._pomRoot.att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
		this._pomRoot.att('xsi:schemaLocation', 'http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd');
		this._pomRoot.ele('modelVersion','4.0.0');

		this._pomRoot.ele('groupId', this._distribGroupID);
		this._pomRoot.ele('artifactId', this._distribArtifactID);
		this._pomRoot.ele('version', this._version);
		this._pomRoot.ele('packaging', 'pom');
	}

	/**
	 * Generates the dependencies for the POM depending on the artifacts that have been built
	 * @param {String} artifactID The artifact id
	 * @param {String} groupID The group id
	 * @param {String} folder The folder to search for zips
	 * @returns {Promise<Promise<>>}
	 */
	async addDependenciesFromFolder(artifactID,groupID, folder)
	{
		return new Promise((resolve) => {
			let regex = new RegExp(artifactID + ".*-(.*?).zip");
			find.file(regex, baseDir + folder, (files) => {

				console.log(`Found ${files.length} brands for artifact ${artifactID}`);

				files.forEach((file) => {
					let match = file.match(/.*-(.*?).zip$/);
					if(isNaN(match[1]))
						this.addDependency(groupID, artifactID, this._version, "zip", match[1]);
				});
				resolve();
			});
		});
	}

	/**
	 * Add a single entry into the POM for a given dependency
	 * @param {String} groupId
	 * @param {String} artifactId
	 * @param {String} version
	 * @param {String} type
	 * @param {String} (classifier)
	 */
	addDependency(groupId, artifactId, version, type, classifier)
	{
		let dependency = this._dependencies.ele('dependency');
		dependency.ele('groupId',groupId);
		dependency.ele('artifactId',artifactId);
		dependency.ele('version',version);
		if(!!classifier)
			dependency.ele('classifier',classifier);

		dependency.ele('type',type);
	}

	/**
	 * Returns a pretty printed version of the POM
	 * @returns {string}
	 */
	toPrettyString()
	{
		return this._pomRoot.end({pretty:true, indent:'\t'});
	}


}

module.exports = DependencyPOM;